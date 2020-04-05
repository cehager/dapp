import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from "../_services/alertify.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { User } from "../_models/User";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  // @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  model: any = {};
  registerForm: FormGroup;
  user: User;
  // gender = "male";
  // en: {};

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createRegisterForm();
    // this.registerForm = new FormGroup(
    //   {
    //     username: new FormControl("", Validators.required),
    //     password: new FormControl("", [
    //       Validators.required,
    //       Validators.minLength(4),
    //       Validators.maxLength(16),
    //     ]),
    //     confirmPassword: new FormControl("", Validators.required),
    //   },
    //   this.passwordMatchValidator
    // );
    // this.en = {
    //   firstDayOfWeek: 0,
    //   dayNames: [
    //     "Sunday",
    //     "Monday",
    //     "Tuesday",
    //     "Wednesday",
    //     "Thursday",
    //     "Friday",
    //     "Saturday",
    //   ],
    //   dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    //   dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    //   monthNames: [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //     "July",
    //     "August",
    //     "September",
    //     "October",
    //     "November",
    //     "December",
    //   ],
    //   monthNamesShort: [
    //     "Jan",
    //     "Feb",
    //     "Mar",
    //     "Apr",
    //     "May",
    //     "Jun",
    //     "Jul",
    //     "Aug",
    //     "Sep",
    //     "Oct",
    //     "Nov",
    //     "Dec",
    //   ],
    //   today: "Today",
    //   clear: "Clear",
    //   dateFormat: "mm/dd/yy",
    //   weekHeader: "Wk",
    // };
  }

  createRegisterForm() {
    this.registerForm = this.fb.group(
      {
        gender: new FormControl("male"),
        username: new FormControl("", Validators.required),
        knowAs: new FormControl("", Validators.required),
        dateOfBirth: new FormControl("", Validators.required),
        city: new FormControl("", Validators.required),
        country: new FormControl("", Validators.required),
        password: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(16),
          ])
        ),
        confirmPassword: new FormControl("", Validators.required),
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get("password").value === g.get("confirmPassword").value
      ? null
      : { mismatch: true };
  }

  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(
        () => {
          this.alertify.success("Registration was successful");
        },
        (error) => {
          this.alertify.error(error);
        },
        () => {
          this.authService.login(this.user).subscribe(() => {
            this.router.navigate(["/members"]);
          });
        }
      );
    }
    // this.authService.register(this.model).subscribe(
    //   () => {
    //     this.alertify.success("registration successful");
    //   },
    //   (error) => {
    //     this.alertify.error(error);
    //   }
    // );
    // console.log(this.registerForm.value);
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.message("cancelled");
  }
}
