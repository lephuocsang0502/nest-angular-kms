import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { ElementRef, Inject } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RequestService } from 'src/app/services/request-services/request.service';
import { WINDOW } from 'src/app/window-token';


export interface File {
  data: any;
  progress: number;
  inProgress: boolean;
}


@Component({
  selector: 'app-create-request-entry',
  templateUrl: './create-request-entry.component.html',
  styleUrls: ['./create-request-entry.component.scss']
})


export class CreateRequestEntryComponent implements OnInit {

  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;

  file: File = {
    data: null,
    inProgress: false,
    progress: 0
  };

  form:FormGroup;
  //origin = this.window.location.origin;

  constructor(
    private formBuilder:FormBuilder,
    private requestService: RequestService,
    private router: Router,
    //@Inject(WINDOW) private window: Window
  ) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      id:[{value:null,disabled:true}],
      spokeCo:[null,[Validators.required]],
      slug:[{value:null,disabled:true}],
      description:[null,[Validators.required]],
      body:[null,[Validators.required]],
      link:[null,[Validators.required]],
      //status:[null,[Validators.required]],
      headerImage: [null]
    })
  }
  post() {
    this.requestService.post(this.form.getRawValue()).pipe(
      tap(()=> this.router.navigate(['../']))
    ).subscribe();
  }

  onClick(){
    const fileInput = this.fileUpload.nativeElement;
    fileInput.click();
    fileInput.onchange = ()=>{
      this.file ={
        data: fileInput.files[0],
        inProgress: false,
        progress:0
      };
      this.fileUpload.nativeElement.value ="";
      this.uploadFile();
    }
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('file', this.file.data);
    this.file.inProgress = true;

    this.requestService.uploadHeaderImage(formData).pipe(
      map((event) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.file.inProgress = false;
        return of('Upload failed');
      })).subscribe((event: any) => {
        if(typeof (event) === 'object') {
          this.form.patchValue({headerImage: event.body.filename});
        }
      })
  }
}
