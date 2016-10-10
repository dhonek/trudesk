
/*
     .                              .o8                     oooo
   .o8                             "888                     `888
 .o888oo oooo d8b oooo  oooo   .oooo888   .ooooo.   .oooo.o  888  oooo
   888   `888""8P `888  `888  d88' `888  d88' `88b d88(  "8  888 .8P'
   888    888      888   888  888   888  888ooo888 `"Y88b.   888888.
   888 .  888      888   888  888   888  888    .o o.  )88b  888 `88b.
   "888" d888b     `V88V"V8P' `Y8bod88P" `Y8bod8P' 8""888P' o888o o888o
 ========================================================================
 Created:    02/10/2015
 Author:     Chris Brame

 **/

/*
 Permissions for TruDesk. Define Roles / Groups.
 --- group:action action action

 *                       = all permissions for grp
 create                  = create permission for grp
 delete                  = delete permission for grp
 edit                    = edit permission for grp
 editSelf                = edit Self Created Items
 assignee                = allowed to be assigned to a ticket
 view                    = view permission for grp
 ticket:attachment       = can add attachment
 ticket:removeAttachment = can remove attachment
 ticket:viewHistory      = can view ticket history on single page
 ticket:setAssignee      = can set ticket Assignee
 ticket:public           = can view public created tickets
 */
var roles = {
    admin: {
        id: "admin",
        name: "Administrators",
        description: "Administrators",
        allowedAction: ["*"]
    },
    mod: {
        id: "mod",
        name: "Moderators",
        description: "Moderators",
        allowedAction: ["mod:*", "ticket:create edit view attachment removeAttachment", "comment:*", "reports:view"]
    },
    support: {
        id: "support",
        name: "Support",
        description: "Support User",
        allowedAction: ["ticket:*", "accounts:create edit view delete", "comment:editSelf create delete", "reports:view", "notices:*", "invoices:view edit delete"]
    },
    user: {
        id: "user",
        name: "User",
        description: "User",
        allowedAction: ["ticket:create editSelf attachment", "comment:create editSelf" ]
    }
};

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = roles;
    }
} else {
    window.roles = roles;
}