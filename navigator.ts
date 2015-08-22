//   Navigator.ts
//   © 2015 filfat Studios AB
//   See https://github.com/filfat-Studios-AB/Navigator.ts

/*
    NavigatorTs
    <summary>
        Base module for the Navigator.ts framework
    <summary>
*/
module NavigatorTs {
    /*
        Navigator
        <summary>
            handles general back and forward navigation
        <summary>
    */
    export class Navigator {
        //Page history
        private history: Page[];
        //Position in the history (0 = first)
        private position: number;

        constructor() {
            this.history = [];
            this.position = 0;
        }
    
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
            return number "current possition"
        */
        public AddRecord(pageName: string) {
            //Create a new page
            var page = new Page;
            page.name = pageName;

            //Add the page to the history
            var lenght = this.history.length;
            this.history[lenght] = page;

            //Navigate to the page
            this.GoForward();
        }

        /*
            public ClearHistory(string)
            <summary>
                Clears the history and resets the position.
            </summary>
        */
        public ClearHistory() {
            this.history = [];
            this.position = 0;
        }
    }

    /*
        PageNavigator
        <summary>
            Class for general page objects.
        <summary>
    */
    class Page {
        //The name of the page
        public name: string;
    }
}