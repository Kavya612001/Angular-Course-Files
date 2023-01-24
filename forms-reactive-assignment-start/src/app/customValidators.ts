import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
    static forbiddenProjName(control: FormControl): {[s: string]: boolean} {
        if(control.value === "Test") {
          return {'projNameIsForbidden': true};
        }
        return null;
      }

      static asyncForbiddenProjName(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === "TestProj") {
                    resolve({'projNameIsForbidden': true});
                  }
                  else {
                    resolve(null);
                  }
            }, 2000);
        });
        return promise;
      }
}