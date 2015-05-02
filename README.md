# HangeeHackthon-Vote

For Hackthon 6th final vote. 

## Flow

![流程圖](flow.png)

## pre-install

 * node.js@0.10.26
 * npm
 * [mongojs](https://github.com/mafintosh/mongojs)
 * [express@4.11.1rc](http://github.com/strongloop/express/)

## how to start

```
npm start
open http://localhost:8080
```

## api



* Create a team :洗洗睡 (for test)
```
[GET] api/create/test
```
>input date : none



* Create a team
```
[GET] api/create/test
```
>input data :
```
team {
	name : String,
	imgURL : String,
	projectName : String,
	projectDetail : String,
	github : String,
	members : [
			{ id : String, name : String, phone : String }, ...	
	],
}
```



* get all teams & team's project info
```
[GET] api/teams/
```



* get all teams & team's project info
```
[GET] api/teams/:id
```





##include

 * [jade](http://jade-lang.com/)
 * [bootstrap](http://getbootstrap.com/)
 * [jquery](http://jquery.com/)
 * [d3](https://github.com/mbostock/d3)
