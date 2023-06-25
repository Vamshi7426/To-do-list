<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <style>
        ul{
            list-style-type: none;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        ul li:before {
            content: "□";
            margin-right: 5px;
        }
        ul li input[type="checkbox"] {
            display: none;
        }
        ul li input[type="checkbox"]:checked + span:before {
            content: "☑";}
        
        .container{
            background-color: chartreuse;
            font-size: large;
        }
        body{
            background-color: blueviolet;
            border: 2px solid black;  
        }
        
    </style>
</head>
<body>
    <div class="container">
        <h1 class="row">To-Do LIST</h1>
        <br><br>
        <div class="row">
            <form>
                <div class="input-group">
                    <input type="text" placeholder="To do-add item" id="box" style="width:30vw">
                </div>
                <br>
                <div class="form-group">
                    <input type="button" value="Add" style="width:10vw" onclick="add_item()">
                </div>
            </form>
        </div>
        <div class="row">
            <ul id="list_item">

            </ul>
        </div>
    </div>
    <script type="text/javascript">
        function add_item() {
            let item = document.getElementById('box');
            let list_item=document.getElementById("list_item");
            if (item.value!= "") {
                let make_li=document.createElement("li"); /*making listorder li of items from ul*/
                /*make_li.appendChild(document.createTextNode(item.value));\ /*value of item wil be added here*/
                
                let checkbox = document.createElement("input"); /*for listing in type of checkbox*/
                checkbox.setAttribute("type", "checkbox");
                let span = document.createElement("span");
                span.appendChild(document.createTextNode(item.value));
                make_li.appendChild(checkbox);
                make_li.appendChild(span);

                list_item.appendChild(make_li); /*closing after appending*/
                item.value=""
                make_li.onclick=function(){
                    this.parentNode.removeChild(this);

                
                }
                /*list_item(item);*/
        }
            else{
                alert("Please add a value to item");
            }
        }


            
    </script>

</body>
</html>
