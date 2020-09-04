import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import{ Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public faShoppingCart = faShoppingCart;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if(!sessionStorage.getItem('sid')){
        this.router.navigate(['login']);
    }
    
  }
  processLogout(){
    sessionStorage.removeItem('sid');
    this.router.navigate(['/login']);
  }

}
