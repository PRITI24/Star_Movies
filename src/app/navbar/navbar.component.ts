import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() movies:FormControl = new FormControl()
  movies$: Observable<any[]>=new Observable;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = new FormControl();

    this.movies$ = this.movies.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(
          searchString => this.movieService.getMovieBySearchTerm(searchString)
        ),
        map((res:any) => res.Search)
        
      );
      console.log(this.movies$)
  }

}