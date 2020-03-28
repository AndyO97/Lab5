
let num=0;
let i=0;
let j=-1;

 function addElement(){
  
    let inputItemInput = document.getElementById( "inputAddItem" );
    let buttonItemInput = document.getElementById( "buttonAddItem" );
  
    buttonItemInput.addEventListener( 'click', ( event ) =>{
        event.preventDefault();
        let results = document.querySelector( '.results' );
        
        if(inputItemInput.value!=""){
            results.innerHTML += 
        `
        <div class="item-`+num+`" id="item-`+num+`">
        <div class="not-crossed" id="itemc-`+num+`">
        <li>
        <label>
        `
            +inputItemInput.value+
        `
        </label>
        <div class="item-buttons">
        <button type="check" class="check check-`+num+`">
            check
        </button>
        <button type="delete" class="delete delete-`+num+`">
            delete
        </button>
        </div>
        </li>
        </div>
        </div>
        `;
        inputItemInput.value="";
        num++;
        }
    });
  
  }

  function clickMe(){

    let container = document.querySelector( '.results' );
  
    container.addEventListener( 'click', ( event ) => {
      
      if( event.target.matches( '.delete' ) ){
        //alert( "This is a delete" );
        i=0;
        j=-1;
        while(i<=num || j<0 ){
            let classSearch='.delete-'+i;
            if(event.target.matches( classSearch )){
                j=i;
                //alert(i);
            }
            i++;
        }
        let deletable = document.querySelector( '.item-'+j );
        deletable.remove();
      }
      
      if( event.target.matches( '.check' ) ){
        //alert( "This is a check" );
        i=0;
        j=-1;
        while(i<=num || j<0 ){
            let classSearch='.check-'+i;
            if(event.target.matches( classSearch )){
                j=i;
                //alert(i);
            }
            i++;
        }
        let checked = document.querySelector( '#itemc-'+j );
        if(checked.className!="crossed"){
            //alert("crossing");
            checked.setAttribute("class", "crossed");
        }
        else{
            //alert("un-crossing");
            checked.setAttribute("class", "not-crossed"); 
        }
        
      }
    });
  
  }
    
  function init(){
    addElement();
    clickMe();
  }
  
  init();