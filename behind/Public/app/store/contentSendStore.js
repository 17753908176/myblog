Ext.define("admin.store.contentSendStore",{
    extend:'Ext.data.Store',
    storeId:'simpsonsStore',
    fields:['classify', 'title', 'resume','content','date'],
/*    data:{'items':[
            { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
            { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
            { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
            { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
        ]},*/
    proxy:{
        type:'ajax',
        url:$.baseUrl()+'/index.php/Home/Article/getArticleList',
        reader:{
            type:'json',
            root:'data',
            successProperty:'success'
        }
    },
    autoLoad:true

});