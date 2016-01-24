(function(){
    //'Sidebar'���캯�������淶�����Ƶ�һ����ĸҪ��д������ʱû��ʹ�� new �ؼ��֣��ᴴ��һЩȫ�ֱ�������Σ�ղ�����

    var Menubar=function(){
        this.el=document.querySelector("#sidebar ul");
        this.state='allClosed';
        this.el.addEventListener('click',function(e){
            e.stopPropagation();
        });
        var self=this;
        this.currentOpenedMenuContent=null;
        this.menuList=document.querySelectorAll("#sidebar ul>li");
        //�˵��ť�¼�
        for(var i=0;i<this.menuList.length;i++){
            this.menuList[i].addEventListener('click',function(e){
                var menuContentEl=document.getElementById(e.currentTarget.id+"-content");
                //���Ĵ򿪡��ر����л��¼�
                if(self.state==='allClosed'){
                    console.log('open '+menuContentEl.id);
                    //menuContentEl.style.top='0';
                    //menuContentEl.style.left='-85px';
                    menuContentEl.className='nav-content';
                    menuContentEl.classList.add('menuContent-move-right');
                    self.state='hasOpened';
                    self.currentOpenedMenuContent=menuContentEl;
                }else{
                    console.log('close '+self.currentOpenedMenuContent.id);
                    //self.currentOpenedMenuContent.style.top='0';
                    //self.currentOpenedMenuContent.style.left='35px';
                    self.currentOpenedMenuContent.className='nav-content';
                    self.currentOpenedMenuContent.classList.add('menuContent-move-left');
                    console.log('open '+menuContentEl.id);
                    //menuContentEl.style.top='250px';
                    //menuContentEl.style.left='35px';
                    menuContentEl.className='nav-content';
                    menuContentEl.classList.add('menuContent-move-up');
                    self.state='hasOpened';
                    self.currentOpenedMenuContent=menuContentEl;
                }
            });
        }
        //����ϵĹرհ�ť�¼�
        this.menuContentList=document.querySelectorAll(".nav-content>.nav-con-close");
        for(i=0;i<this.menuContentList.length;i++){
            this.menuContentList[i].addEventListener('click',function(e){
                var menuContent= e.currentTarget.parentNode;
                menuContent.className='nav-content';
                menuContent.classList.add('menuContent-move-left');
                self.state='allClosed';
            });
        }
    };
    Menubar.prototype.close=function(){
        if(this.currentOpenedMenuContent){
            this.currentOpenedMenuContent.className='nav-content';
            this.currentOpenedMenuContent.classList.add('menuContent-move-left');
            this.state='allClosed';
        }
    };

    var menubar=new Menubar();

    var Sidebar=function(eId,closeBarId){
        this.state='opened';
        this.el=document.getElementById(eId||'sidebar');
        this.closeBarEl=document.getElementById(closeBarId||'closeBar');
        var self=this;
        //this.menubar=new Menubar();
        this.el.addEventListener('click',function(event){
            if(event.target!==self.el){
                self.triggerSwitch();
            }
        });
    };
    Sidebar.prototype.close=function(){
        console.log('close sidebar');
        menubar.close();
        this.el.className='sidebar-move-left';
        this.closeBarEl.className='closeBar-move-right';
        this.state='closed';
    };
    Sidebar.prototype.open=function(){
        console.log('open sidebar');
        //this.el.style.left='-120px';
        this.el.className='sidebar-move-right';
        //this.closeBarEl.style.left='160px';
        this.closeBarEl.className='closeBar-move-left';
        this.state='opened';
    };
    Sidebar.prototype.triggerSwitch=function(){
        if(this.state==='opened'){
            this.close();
        }else{
            this.open();
        }
    };
    //����ʱû��ʹ�� new �ؼ��֣��ᴴ��һЩȫ�ֱ�������Σ�ղ�����

    var sidebar=new Sidebar();
})();