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
        //Handles navigation
        public NavigationHandler: Function;
        //Page history
        private history: Page[];
        //Position in the history (1 = first)
        private position: number;

        /*
            public Navigator()
            <summary>
                Set's everything to the default state.
            </summary>
            a Navigator object.
        */
        constructor() {
            this.ClearHistory();
            this.NavigationHandler = function (pageName) {
                console.log('pageName:' + pageName);
                console.log('position: ' + this.position);
                console.log('history.length: ' + this.history.length);
                alert(this.position);
            }
        }
    
        /*
            public GoBack()
            <summary>
                Navigates backward.
            </summary>
            return string "page name after navigation"
        */
        public GoBack(): string {
            //Check if history is empty
            if (this.history.length < 1) {
                return null;
            }

            //Make sure we dont go out of scope
            if (this.position - 1 < 1) {
                this.position = 2;
            }
            
            //Navigate to the new page
            this.position -= 1;
            this.NavigationHandler(this.history[this.position - 1].name);

            //Return the current page's name
            return this.history[this.position - 1].name;
        }
    
        /*
            public GoForward()
            <summary>
                Navigates forward.
            </summary>
            return string "page name after navigation"
        */
        public GoForward(): string {
            //Check if history is empty
            if (this.history.length < 1) {
                return null;
            }

            //Make sure we dont go out of scope
            if (this.position + 1 > this.history.length) {
                this.position = this.history.length - 1;
            }

            //Navigate to the new page
            this.position += 1;
            this.NavigationHandler(this.history[this.position - 1].name);

            //Return the current page's name
            return this.history[this.position - 1].name;
        }
    
        /*
            public AddEntry(string)
            pageName string "The page"
            <summary>
                Add page to the history.
            </summary>
            return number "current possition"
        */
        public AddEntry(pageName: string): number {
            //Create a new page
            var page = new Page;
            page.name = pageName;

            //Add the page to the history
            this.history.push(page);

            //Navigate to the page
            this.GoForward();
            return this.position;
        }

        /*
            public ClearHistory()
            <summary>
                Clears the history and resets the position.
            </summary>
        */
        public ClearHistory() {
            if((typeof this.history !== 'undefined' && this.history) && this.history.length > 0){
                var p = this.history[this.position - 1];
                this.history = [];
                this.history[0] = p;
            }
            else
                this.history = [];
            this.position = 1;
        }
    }

    /*
        Page
        <summary>
            Class for general page objects.
        <summary>
    */
    class Page {
        //The name of the page
        public name: string;
    }
}