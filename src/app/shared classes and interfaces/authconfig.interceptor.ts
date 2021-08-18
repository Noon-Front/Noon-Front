import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { FormServiceService } from "./form-service.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private formService: FormServiceService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.formService.getToken;
        req = req.clone({
            setHeaders: {
              Authorization: "Bearer " + authToken,
            }
        });
        return next.handle(req);
    }
}
