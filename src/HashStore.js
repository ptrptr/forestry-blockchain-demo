
import {createHash} from 'crypto';

var STORE = {};
const PARENT_ATTR="_parent";

function calcHash(o) {
    var message = JSON.stringify(o);
    const hash = createHash("sha256");
    return hash.update(message).digest("base64");
}

function store(o) {
    var hash = calcHash(o);
    STORE[hash] = o;
    return hash;
}

export function create(parent, data) {
    if(data == null || data[PARENT_ATTR] != null) {
        throw "Bad data";
    }
    if(parent == null) {
        throw "Orphan";
    }
    data[PARENT_ATTR] = parent;
    return store(data);
}
    
export function issue(data) {
    if(data == null) throw "Bad data";
    console.log("DATA: " + JSON.stringify(STORE));
    return store(data);
}