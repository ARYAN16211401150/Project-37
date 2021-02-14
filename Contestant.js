class Contestant
{
    constructor()
    {
      this.name=null;
      this.index=null;
      var Submit;
      Submit=createButton()
    }
    getCount()
    {
       var cc=database.ref('contestantCount')
       cc.on("value",function(data){
           contestantCount=data.val()
       })
    }
    updateCount(count)
    {
       database.ref('/').update({
           contestantCount:count
       })
    }
    update()
    {
       var contestantIndex="contestant"+this.index;
       database.ref(contestantIndex).set({
           name:this.name
       })
    }
}