import { Directive } from '@angular/core'
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms'

@Directive({
    selector: '[validateLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting: ValidateLocationDirective, multi: true}]
})
export class ValidateLocationDirective implements Validator {

    validate(formGroupLocation: FormGroup): {[key: string]: any} {

        let addressControl = formGroupLocation.controls['address']
        let cityControl = formGroupLocation.controls['city']
        let countryControl = formGroupLocation.controls['country']
        let urlControl = (<FormGroup>formGroupLocation.root).controls['url'] 
        //We had to do this because in the HTML this formControl 'url' is one node above from the location and that's the way
        //we can access to it by declaring it from root. 

        if((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) || (urlControl && urlControl.value))
            return null
        else{
            return { validateLocation: false}
        }

    }

}