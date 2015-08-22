//   Navigator.ts
//   © 2015 filfat Studios AB
//   See https://github.com/filfat-Studios-AB/Navigator.ts

/*
    PageNavigator
    <summary>
        handles general back and forward navigation
    <summary>
*/
class PageNavigator {
    private history = [];       //Page history
    private position: number;   //Position in the history

    /*
        public GoBack(string)
        <summary>
            Navigates backward.
        </summary>
        return string "page name after navigation"
    */
    public GoBack() {
        return 'page name';
    }

    /*
        public GoForward(string)
        <summary>
            Navigates forward.
        </summary>
        return string "page name after navigation"
    */
    public GoForward() {
        return 'page name';
    }

    /*
        public AddRecord(string)
        pageName string "The page"
        <summary>
            Add page to the history.
        </summary>
        return boolean "True if successful, else false"
    */
    public AddRecord(pageName:string) {
        return true;
    }
}