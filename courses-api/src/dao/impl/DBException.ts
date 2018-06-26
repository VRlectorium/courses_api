class DBException extends Error{
    private err;

    constructor(err){
        super();
        this.err = err;
    }
}

export default DBException;