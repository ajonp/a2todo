export class Init{
    load(){
        if(localStorage.getItem('todos') === null || 
            localStorage.getItem('todos') == undefined){
                console.log('No Todos Found....creating...');
                var todos = [
                { text: 'Pick Alex Up Oliver'},
                { text: 'Dinner with wife'},
                { text: 'Drink a beer'}
                ];
            localStorage.setItem('todos', JSON.stringify(todos));
            return;
        }else{
            console.log('found todos...');
        }
    }
}