/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServicesComponent } from './services.component';
import {Messages} from "../messages";
import {ServiceViewBean} from "../../domain/service-view-bean";
import {ServiceViewService} from "./service.service";

let serviceViewServiceStub = {
  getServices(domain: String): Promise<ServiceViewBean[]> {
    return Promise.resolve([]);
  },

  delete(service): Promise<void> {
     return Promise.resolve();
  },

  updateOrder(a: ServiceViewBean, b: ServiceViewBean): Promise<String> {
    return Promise.resolve("200");
  }
};

let userServiceStub = {
  getRoles(): Promise<String[]> {
    return Promise.resolve([]);
  },
  getPermissions(): Promise<String[]> {
    return Promise.resolve([]);
  }
};

let controlsServiceStub = {
  commit(msg: String): Promise<String> {
    return Promise.resolve("");
  },

  publish(): Promise<void> {
    return Promise.resolve();
  },

  submit(): Promise<void> {
    return Promise.resolve();
  },

  unpublished(): Promise<number> {
    return Promise.resolve(0);
  }
};

describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ],
      declarations: [ ServicesComponent ],
      providers: [
        Messages,
        {provide: ServiceViewService, useValue: serviceViewServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
