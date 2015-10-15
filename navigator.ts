//   Navigator.ts
//   Copyright © 2015 filfat Studios AB
//   Version: 0.1
//   License: MIT
//   Repo:    https://github.com/filfat-Studios-AB/Navigator.ts
//   Website: https://www.navigatorts.org

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
            public Navigator(void)
            <summary>
                Set's everything to the default state.
            </summary>
            return Navigator "A Navigator object".
        */
        constructor() {
            this.ClearHistory();
            this.NavigationHandler = function (page: Page) {
                console.log('page.name:' + page.name);
                console.log('page.uri:' + page.uri);
                console.log('position: ' + this.position);
                console.log('history.length: ' + this.history.length);
                console.log('-------------------------');
            }
        }
    
        /*
            public GoBack(void)
            <summary>
                Navigates backward.
            </summary>
            return Page "page after navigation"
        */
        public GoBack(): Page {
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
            return this.history[this.position - 1];
        }
    
        /*
            public GoForward(void)
            <summary>
                Navigates forward.
            </summary>
            return Page "page after navigation"
        */
        public GoForward(): Page {
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
            return this.history[this.position - 1];
        }
    
        /*
            public AddEntry(string, string, Object)
            name string "The name of the page"
            uri string "URI to the page, if null it'll default to the name"
            data Object "any extra data required by the page, if null it'll default to null"
            <summary>
                Add page to the history.
            </summary>
            return number "current possition"
        */
        public AddEntry(name: string, uri: string, data: Object): number {
            //Create a new page
            var page = new Page;
            page.name = name;
            page.uri = (typeof uri !== 'undefined') ? uri : page.name;
            page.data = (typeof data !== 'undefined') ? data : null;

            if (this.history.length == this.position || this.history.length == 0) {
                //Add the page to the history
                this.history.push(page);
            }
            else {
                //Remove pages in front of the one being added
                this.history.length = this.position;
                this.history.push(page);
            }

            //Navigate to the page
            this.GoForward();
            return this.position;
        }

        /*
            public GetCurrentPage(void)
            <summary>
                Get the current page
            </summary>
            return Page "current page"
        */
        public GetCurrentPage(): Page {
            //Return the current page
            return this.history[this.position - 1];
        }

        /*
            public ClearHistory(void)
            <summary>
                Clears the history and resets the position.
            </summary>
        */
        public ClearHistory(): void {
            if ((typeof this.history !== 'undefined' && this.history) && this.history.length > 0) {
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
		//The URI
		public uri: string;
        //Data
        public data: Object = {};
    }
}
