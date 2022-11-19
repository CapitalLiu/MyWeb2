
window.onload=function(){
    function find(key){
        return this.dataStorege[key];
    }
    function add(key,value){
        this.dataStorege[key] = value;
    }
    function Dictionary(){
        this.dataStorege=new Array();
        this.add=add;
        this.find=find;
    }

    var Database=new Dictionary();
    var make_name=document.getElementById(init_name)
    var make_password=document.getElementById(init_password)
    var regester_btn=document.getElementById(regester)
    var login_btn=document.getElementById(login)
    var username=document.getElementsByName(username).value
    var password=document.getElementsByName(password).value
    var change_btn=document.getElementById(changes)
    var container=document.getElementsByClassName(container)
    var regesters=document.getElementsByClassName(regester)

    change_btn.addEventListener('click',function(){
        regesters.className='regesters'

    })
    regester_btn.addEventListener('click',function(){
        var new_name = make_name.value
        var new_word = make_password.value
        Database.add(new_name,new_word)
    })

    login_btn.addEventListener('click',function(){
        true_word=database[username]
        if(true_word ==password ){
            window.location.href='https://ilovefishc.com/html5/'
        }
    })
}