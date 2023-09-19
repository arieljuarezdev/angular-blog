import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  imageCover: string = 'https://www.laranjacast.com.br/wp-content/uploads/2023/07/hajime.webp';

  @Input()
  titleContent: string = '';

  @Input()
  descriptionContent: string = '';

  private id: string | null = '0';

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
    )

    this.setValuesToContent(this.id)
  }

  setValuesToContent(id: string | null){
    const result = dataFake.filter( article => article.id == id)[0]

    console.log(result)    

    this.imageCover = result.photo;
    this.titleContent = result.title
    this.descriptionContent = result.description;
  }

}
