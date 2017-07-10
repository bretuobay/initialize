
import { InitialsConfig, excludedTitles} from './';

  class InitializerClass {



  constructor(){

  }

    public setDefaultConfig(config: InitialsConfig) {
       config = {
        lang : 'en',
        len : 2
      }
      return config;
    }


    /**
    @userName takes username and cleans it up , avoid over doing it because, validation should done by
    the programmer who uses the package.
    */

    public sanitize(userName: string, config : InitialsConfig ={}): string[] {

        let initConfig = (!config || !config.hasOwnProperty('lang'))? this.setDefaultConfig(config) : config;

      let  userArray = (userName.trim().split(" ").
                        map((pname) => {
                          let retval =  (
                          excludedTitles[initConfig.lang].indexOf(pname) > -1
                          //|| excludedTitles[initConfig.lang].filter( (tit) => tit.startsWith(pname))
                          )
                           ?  null :  pname
                          return retval;
                          }) || [] ).
                          filter((pname) => {
                          return pname != undefined
                          });
      return userArray;
    }
  /**
    @userName takes username and cleans it up using private function cleanUpName
   expects a string of two chars, realistically?
  */
    public initialize(userName: string, config : InitialsConfig): string {
        let userArray = this.sanitize(userName, config);
         return (userArray.length > 1) ?
          `${userArray[0][0]}${userArray[userArray.length-1][0]}`.toUpperCase() :
          `${userArray[0][0]}`.toUpperCase() || null;

    }

}
export const Initializer = new InitializerClass();

//console.log(init.initialize('Festus Yeboah'))
