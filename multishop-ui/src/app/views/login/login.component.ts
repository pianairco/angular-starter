import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PianaStorageService} from "../../services/piana-storage.service";
import {LoadingService} from "../../services/loading.service";
import {ConstantService} from "../../services/constant.service";
import {SocialAuthService} from "angularx-social-login";
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showModal: boolean = true;
  loginInfo: {
    username: '',
    password: '',
    captcha: ''
  }
  captchaCounter: number = 0;
  returnUrl: string;

  constructor(
    private authService: SocialAuthService,
    private pianaStorageService: PianaStorageService,
    private loadingService: LoadingService,
    private constantService: ConstantService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log("on login component init")
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.loginInfo = {
      username: '',
        password: '',
        captcha: ''
    }

    // axios.get('resources/captcha', { headers: { withCredentials: true } })
    //   .then(res => {
    //     console.log(res);
    //   }, err => {
    //     console.log(err);
    //   });
  }

  windowRef=null;

  openLoginWindow(){
    this.windowRef= window.open("https://piana.ir/#/login","child", "toolbar=no,location=no,directories=no,status=no,menubar=no,titlebar=no,fullscreen=no,scrollbars=1,resizable=no,width=430,height=220,left=500,top=100");
    this.windowRef.addEventListener("message",this.receivemessage.bind(this), false);
  }

  receivemessage(evt:any){
    console.log(evt.data)
  }

  public getLinkPicture() {
    return 'resources/captcha' + '?' + this.captchaCounter;
  }

  login() {
    let promise = this.authenticationService.login(this.loginInfo);
    promise.then(appInfo => {
      console.log(appInfo);
      this.router.navigate([this.returnUrl]);
    }, err => {
      console.log(err);
      this.captchaCounter++;
    });
    // axios.post('api/sign-in', this.loginInfo, {headers: {}})
    //   .then(res => {
    //     console.log(res);
    //   }, err => {
    //     this.timeStamp = this.timeStamp + 1;
    //     console.log(err);
    //   });
  }

  async handleClickGoogleSignIn() {
    axios.post('api/sign-in/sub-domain', {}, {headers: {"content-type": "application/json" }})
      .then(res => {
        this.windowRef= window.open(res.data['redirect'],"child", "toolbar=no,location=no,directories=no,status=no,menubar=no,titlebar=no,fullscreen=no,scrollbars=1,resizable=no,width=430,height=220,left=500,top=100");
        this.windowRef.addEventListener("message",this.receivemessage.bind(this), false);
      }, err => {
        console.log(err)
      })

    /*let accessToken = "1234"
    this.loadingService.changeState(true);
    try {

      // this.$gAuth.getAuthCode().then((authCode) => {
      //   //on success
      //   this.isLoading = false;
      //   console.log("authCode", authCode);
      // })
      //   .catch((error) => {
      //     //on fail do something
      //     this.isLoading = false;
      //     console.log("error", error);
      //   });
      let appInfo = await this.authenticationService.googleSignIn();
      this.loadingService.changeState(false);
      this.router.navigate([this.returnUrl]);
    } catch (error) {
      this.loadingService.changeState(false);
      console.log(error)
    }*/
  }
}