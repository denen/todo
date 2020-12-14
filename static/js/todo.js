$(document).ready(function(){

    $("#createButton").click(function(){
        var serializeData = $("#createTaskForm").serialize();
        
        $.ajax({
            url: $("createTaskForm").data('url'),
            data: serializeData,
            type: 'post',
            success: function(response){
                $("#taskList").append('<div class="card mb-1" id="taskCard" data-id="' + response.task.id + '"><div class="card-body">' + response.task.title + '<button type="button" class="close float-right"><span aria-hidden="true">&times;</span></button></div></div>')
            }
        })

    });

});