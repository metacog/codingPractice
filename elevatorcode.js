function elevator() 
{
	this.accending; 
	this.mainarray = new Array(); 
	this.sparearray = new Array();
	this.addfloor = function (newfloor)
	{
		if(typeof this.accending != 'undefined')
		{
			if (this.accending  == 0)
			//decending
			{
				if (parseInt(this.mainarray[0]) < parseInt(newfloor))
				{
					if (this.sparearray.indexOf(newfloor) == -1)
					{
						this.sparearray.push(parseInt(newfloor));					
					}
				}
				else
				{
					if (this.mainarray.indexOf(newfloor) == -1)
					{
					this.mainarray.push(parseInt(newfloor));
					this.mainarray.sort(function(a,b){return b - a});					
					}
				};
			}
			else
			//accending
			{
				if (parseInt(this.mainarray[0]) <= parseInt(newfloor))
				{
					if (this.mainarray.indexOf(newfloor) == -1)
					{
					this.mainarray.push(parseInt(newfloor));
					this.mainarray.sort(function(a,b){return a - b});					
					}					
				}
				else
				{
					if (this.sparearray.indexOf(newfloor) == -1)
					{
					this.sparearray.push(parseInt(newfloor));					
					}
				};
			};
		}
		else
		{
			if (this.mainarray.length >1)
			{
				if (parseInt(this.mainarray[0]) > parseInt(this.mainarray[1]))
				{
					this.accending = 0;
				}
				else
				{
					this.accending = 1;
				};
				this.addfloor(newfloor);
			}
			else
			{
			this.mainarray.push(parseInt(newfloor));
			};
		};
	};
};
elevator.prototype.start = function(self)
{
	if(typeof this.mainarray != 'undefined')
	{	
		if(this.mainarray.length > 1)
		{
			if(typeof this.accending != 'undefined')
			{
				console.log("length 2");
				console.log("on floor " + this.mainarray[0] + " going to floor " + this.mainarray[1]);		
				this.mainarray.splice(0,1);
			}	
		}
		else if (this.mainarray.length == 1)
		{
			console.log("length 1");
			console.log("on floor " + this.mainarray[0]);
			this.mainarray.splice(0,1);
			console.log("array length " + this.mainarray.length);
		}
		else
		{
			if(typeof this.accending != 'undefined')
			{
				if (this.accending  == 0)
				//decending
				{
					this.mainarray = this.sparearray;
					this.sparearray = new Array();
					this.accending = 1;
					this.mainarray.sort(function(a,b){return a - b});
				}
				else
				//accending
				{
					this.mainarray = this.sparearray;
					this.sparearray = new Array();
					this.accending = 0;
					this.mainarray.sort(function(a,b){return b - a});
				};
			}
			else
			{
				console.log("on floor 0");			
			};
		};
		setTimeout(function(){self.start(self)}, 1000);	
	}
	else
	{
		console.log("on floor 0");
	};	 
	console.log("loop");

};
elevator.prototype.print = function(self)
{
	console.log(this.mainarray);
	console.log(this.sparearray);
	setTimeout(function() { self.print(self) }, 1000);
};
var firstelevator = new elevator(); 
firstelevator.addfloor(13);
firstelevator.addfloor(14);
firstelevator.addfloor(13);
firstelevator.addfloor(16);
firstelevator.addfloor(2);
/*firstelevator.addfloor(1);
firstelevator.addfloor(3);
firstelevator.addfloor(4);
firstelevator.addfloor(3);
firstelevator.addfloor(12);
firstelevator.addfloor(14);
firstelevator.addfloor(13);
firstelevator.addfloor(16);
firstelevator.addfloor(2);
firstelevator.addfloor(4);
firstelevator.addfloor(5);
firstelevator.addfloor(6);
firstelevator.addfloor(7);*/
console.log(firstelevator.mainarray);
console.log(firstelevator.sparearray);
firstelevator.start(firstelevator);




function setfloorandtime(floormin,floormax,timemin,timemax, elevator)
{
	var floorvar = function getRandomInt (floormin, floormax) {
		return Math.floor(Math.random() * (floormax - floormin + 1)) + floormin;
	}
	elevator.addfloor(floorvar(floormin,floormax));
	console.log(firstelevator.mainarray);
	console.log(firstelevator.sparearray);
	var timevar = function getRandomTime (timemin, timemax) {
		var timevar =  Math.floor(Math.random() * (timemax - timemin + 1)) + timemin;
	return timevar * 1000;
	}
	setTimeout(function() { setfloorandtime(floormin,floormax,timemin,timemax,elevator); }, timevar(timemin,timemax));
}
setTimeout(function() { setfloorandtime(1,30,.5,1,firstelevator); }, 1000);





