declare module 'esmangle' {
  export function optimize(ast: any, pipeline?: any[]): any;
  
  export namespace pass {
    export namespace Registry {
      export namespace pass {
        export namespace deadcode {
          export const transformations: any[];
        }
      }
    }
  }
}

