const yargs = require('yargs');
const todos = require('./todos.js')

// create add command
yargs.command({
   command:'add',
   describe:'Add a new note',
   builder : {
        title : {
            describe: 'Note title',
            demandOption: true ,//to make arg require
            type :'string'
        },
        description : {
            describe: 'Note description',
            demandOption: true,//to make arg require
            type: 'string'
        }
   },
   handler(argv){
    todos.addtodo(argv.title,argv.description)
   } 
})

// create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder : {
        title : {
            describe:"Titile of note which you want to remove",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        // console.log('Removing a note');
        todos.removetodo(argv.title)
    }
})

// create read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builder : {
        title : {
            describe:'Title of note which you want to read',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        todos.readtodo(argv.title)
    }
})

// create list command
yargs.command({
    command:'list',
    describe:'List your todos',
    handler(){
        todos.gettodos();
    }
})

yargs.parse()