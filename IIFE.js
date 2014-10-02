

var ten = sum(1, 2, 3, 4); 

console.log(' our sum is '  + ten);
    
    
// hi guys
/* our goal is to make these IIFEs */


// msfleetCollapse
// Looks for all divs with class "collapse"
// 
// <div class="collapse">
//   <h4><i class="fa fa-plus-square-o"></i>Title</h4>
//   <p>Content to be shown</p>
// </div>
//
var msfleetCollapse = (function() {
    'use strict';
    var collapseParent = $('.collapse h4');

    function clickListener() {
        $(collapseParent).on('click', function() {
            $(this).parent().toggleClass('expand');
            $(this).find('i').toggleClass('fa-plus-square-o').toggleClass('fa-minus-square-o');
        });
    }

    return {
        // Attach the click listener with .run()
        run : clickListener
    }

})();

msfleetCollapse.run();


// Methods
var contacts = {
    userDeleteArray: [],
    init: function() {
        if ( Y.one('.OOAOUsers .Content') ) {
            this.initUserListView();
        }
    },
    deleteCurrentContact: function(node, e) {
        {
            var currentRow = node.ancestor("tr"),
            custRequestContactMapId = currentRow.one('.CustRequestContactMapId .Field input').get('value');

            if ( e ) { e.preventDefault(); }
            this.userDeleteArray.push(custRequestContactMapId);
            accountCanvas.one('.JsonDeletes .Field input').set('value', Y.JSON.stringify(this.userDeleteArray));

            currentRow.remove();
        }
    },
    initUserListView: function() {
        var userListView,
            userArray = [],
            existingUsers,
            userList = AIRCard.userList = new Y.UserList(),
            existingUsersEl = accountCanvas.one('.JsonUsers .Field input'),
            formButtons = accountCanvas.one('.FooterButtonsRight');

        if (existingUsersEl) {
            existingUsers = existingUsersEl.get('value');
            if (existingUsers.length > 0) {
                userList.add(Y.JSON.parse(existingUsers));
            }
        }

        userListView = new Y.UserListView({
                                modelList           : userList,
                                minRows             : 0,
                                addRowLabel         : programData.Phrase[12030669],
                                deleteRowLabel      : programData.Phrase[12007156],
                                deleteColumnLabel   : undefined,
                                container           : Y.one('.OOAOUsers .Content')
                                });

        userListView.render();
        userListView.initEmptyRows();

        formButtons.one('div.Submit input').on('click', function(e){
            if(userListView.validate()){
                existingUsersEl.set('value', Y.JSON.stringify(userList.toSaveJSON()));
                return;
            }

            e.preventDefault();
            return;
        });
        clearButton.on('click',userList.remove(userList));
    }
};