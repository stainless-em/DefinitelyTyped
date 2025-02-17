/**
 * Deterministic version of JSON.stringify() so you can get a consistent hash from stringified results.
 *
 * @returns Deterministic json result.
 */
declare function stringify(obj: any, opts?: stringify.Comparator | stringify.Options): string;

declare namespace stringify {
    interface Element {
        key: string;
        value: any;
    }

    type Comparator = (a: Element, b: Element, opts?: { get(k: string): any }) => number;

    type Replacer = (key: string, value: any) => any;

    interface Options {
        /**
         * Custom comparator for key
         */
        cmp?: Comparator;

        /**
         * Indent the output for pretty-printing.
         *
         * Supported is either a string or a number of spaces.
         */
        space?: string | number;

        /**
         * Option to replace values to simpler values
         */
        replacer?: Replacer;

        /**
         * true to allow cycles, by marking the entries as __cycle__.
         */
        cycles?: boolean;
    }
}

export = stringify;
