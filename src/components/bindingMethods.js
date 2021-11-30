// 1) <button onClick={this.clickHandler.bind(this)}> click </button>
// it decreases performance in large applications but not in smaller one




//2) onClick={ () => this.changeHandler() }
//Also has perfromance issues in some case




//3) constructor(){
    //super()

    //this.state={

    //}

    //this.changehandler = this.changehandler.bind(this);
//} //this is the preferable approach

//onClick={this.changeHandler}






//4 clickHandler = () => {
    //body
//}

//onClick={this.ClickHandler} //preferable method