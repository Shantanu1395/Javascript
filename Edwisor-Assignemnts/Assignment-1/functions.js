function displayInfo(pokeName){
	var len=poke.pokemon.length;
	console.log("Pokemon details:");
	for(var i=0;i<len;i++){
		if(poke.pokemon[i].name.toLowerCase()==pokeName.toLowerCase()){
			console.log("Id:"+poke.pokemon[i].id);

			console.log("Num:"+poke.pokemon[i].num);

			console.log("Name:"+poke.pokemon[i].name);

			console.log("Type:");
			for(var j=0;j<poke.pokemon[i].type.length;j++)
				console.log(poke.pokemon[i].type[j]);
			
		    console.log("Height:"+poke.pokemon[i].height);

		    console.log("Weight:"+poke.pokemon[i].weight);

		    console.log("Candy:"+poke.pokemon[i].candy);

		    console.log("Candy Count:"+poke.pokemon[i].candy_count);

		    console.log("Egg:"+poke.pokemon[i].egg);
		    
		    console.log("spawn_chance:"+poke.pokemon[i].spawn_chance);
		    
		    console.log("spawn_time:"+poke.pokemon[i].avg_spawns);
		    
		    console.log("multipliers:"+poke.pokemon[i].multipliers);
		    
		    console.log("Weaknesses:");
		    for(var j=0;j<poke.pokemon[i].weaknesses.length;j++)
				console.log(poke.pokemon[i].weaknesses[j]);
		    
		    preEvolution(poke.pokemon[i].name);
		    
		    nextEvolution(poke.pokemon[i].name);
		    
		}
	}
}

function showWeaknesses(weakness){
	var len=poke.pokemon.length;
	console.log("Pokemon having weakness "+weakness+":")
	var flag=false;
	for (var i = 0; i < len; i++) {
		for(var j=0;j<poke.pokemon[i].weaknesses.length;j++){
			if (weakness.toLowerCase()==poke.pokemon[i].weaknesses[j].toLowerCase()){
				flag=true;
				console.log(poke.pokemon[i].name);
			    break;
			}
		}
	}
	if (flag==false){
		console.log("None")
	}
}

function nextEvolution(pokeName){
	var len=poke.pokemon.length;
	var next=[];
	console.log("Next Evolution of "+pokeName+" :");
	var flag=false;
	
	for(var i=0;i<len;i++){
		if(poke.pokemon[i].name.toLowerCase()==pokeName.toLowerCase()){
				if(poke.pokemon[i].hasOwnProperty("next_evolution")){
					flag=true;
					for(j=0;j<poke.pokemon[i].next_evolution.length;j++){
						next.push(poke.pokemon[i].next_evolution[j].name);
				    }
		        }else
		        flag=false;
		}
	}
	if (flag==false){
		next.push("None")
	}
		console.log(next.join(','));
	
}

function preEvolution(pokeName){
	var len=poke.pokemon.length;
	var prev=[];
	console.log("Previous Evolution of "+pokeName+" :");
	var flag=false;
	
	for(var i=0;i<len;i++){
		if(poke.pokemon[i].name.toLowerCase()==pokeName.toLowerCase()){
			if(poke.pokemon[i].hasOwnProperty("prev_evolution")){
				flag=true;
				for(j=0;j<poke.pokemon[i].prev_evolution.length;j++){
					prev.push(poke.pokemon[i].prev_evolution[j].name);
				}
			}
			else
				flag=false;
		}
	}
	if (flag==false){
		prev.push("None")
	}
		console.log(prev.join(','));
	
}
