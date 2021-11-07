import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass']
})
export class DemoComponent {
  title = 'finalP';

  Observable: boolean = false;
  names: string[] = [];
  message: string = 'Se viene arreglo';
  
  name: string = ''
 
  addItem(){
    this.names.push(this.name);
    this.name = '';
  };
  removeItem(){
    if(this.names.length === 0){
      this.message = 'No hay elementos para eliminar'
    }else{
      this.message = 'Eliminado item en la posición ' + this.names.length.toString();
      this.names.pop();
    }
  };
}
