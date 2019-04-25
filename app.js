new Vue ({
 el: "#app",
 data: {
 	user: "Tristen",
 	todos: [
 		//{text: "Practice Trumpet", value: 2, goal: 7},
 		//{text: "Meditate", value: 3, goal: 4},
 		//{text: "Study Bio", value: 1, goal: 5},
 	],
 	newTodo: "",
 	newGoal: "",

 },
 methods: {
 	add:function(){
    	this.todos.push({text: this.newTodo, value:0, goal: this.newGoal, last: new Date()})
    	this.newTodo=""
	},
	checkTime:function(e, todo){
		
		//todo.last
		var now = new Date();

		var timeDiff = (now - todo.last)/1000 ;
	
		if(timeDiff >= 86400) {

			todo.value++;
			todo.last = now;
		} else {
			console.log('cant update yet')
		}
	}

	// value:function(){
	// 	if(timeDiff) >= 86400
	// }
	}
})