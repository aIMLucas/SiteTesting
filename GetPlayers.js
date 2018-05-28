function getPlayers()
{
	let x = document.getElementById("tfPlayers");
	
	
	
	var op = null;
	var json = requirejs(["tfplayers.json"]);
	
	if (json == null)
	{
		var error = document.createElement("option");
		error.text = "Error: JSON returned NULL!";
		x.add(error);
		
		return;
	}
	
	for (i = 0; i <= json.length; i++)
	{
		let option = document.createElement("option");
		option.text = json[i].name + "(" + json[i].realName + ")";
		option.value = i;
		
		x.add(option);
	}
}