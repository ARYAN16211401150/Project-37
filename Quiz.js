class Quiz
{
    constructor(){
    }
    getState()
    {
       var gs=database.ref('gameState')
       gs.on("value", function(data){
           gameState=data.val()
       })
    }
    update(state)
    {
       database.ref('/').update({
           gameState:state
       })
    }
    async start()
    {
        if(gameState===0)
        {
            contestant=new Contestant()
            var cc=await database.ref('contestantCount').once("value");
          if(cc.exists())
          {
              contestantCount=cc.val();
              contestant.getCount()
          }
          question = new Question();
          question.display();
        }
    }
}    