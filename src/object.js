const log = console.log;

log( Object.assign( {a:1,b:{c:1,d:2}}, {b:{e:3}} ) );
// {a:1, b:{e:3}}