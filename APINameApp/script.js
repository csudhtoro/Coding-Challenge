
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById("people");
const url = 'https://randomuser.me/api/?results=1000';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let people = data.results;

    return people.map(function(people) {

        let li = createNode('div'),
        span = createNode('th');


        span.innerHTML=`${people.name.first}, ${people.name.last}, ${people.phone}, ${people.email} <button type="button" value="text"> Edit Email and Phone Number</button>`;
        
        /*console.log(JSON.stringify(people.name.first));
        console.log(JSON.stringify(people.name.last));
        console.log(JSON.stringify(people.phone));
        console.log(JSON.stringify(people.email));*/
        
        
        append(li,span);
        append(ul,li);
    })
})
.catch(function(error) {
    console.log(JSON.stringify(error));
})


/*config = {
    locateFile: filename => `/dist/${filename}`
  }
  initSqlJs(config).then(function(SQL){
    //Create the database
    var db = new SQL.Database();
    // Run a query without reading the results
    db.run("CREATE TABLE test (col1, col2);");
    // Insert two rows: (1,111) and (2,222)
    db.run("INSERT INTO test VALUES (?,?), (?,?)", [1,111,2,222]);

    // Prepare a statement
    var stmt = db.prepare("SELECT * FROM test WHERE col1 BETWEEN $start AND $end");
    stmt.getAsObject({$start:1, $end:1}); // {col1:1, col2:111}

    // Bind new values
    stmt.bind({$start:1, $end:2});
    while(stmt.step()) { //
      var row = stmt.getAsObject();
      console.log('Here is a row: ' + JSON.stringify(row));
    }
  });*/

  //function sortTable() {}