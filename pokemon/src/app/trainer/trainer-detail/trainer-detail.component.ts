import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { RouterLink } from '@angular/router';
import { TrainerService } from '../trainer.service';
import { ActivatedRoute } from '@angular/router';
import { UrlCodec } from '@angular/common/upgrade';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {

  trainerId!: number;
  @Input() trainerDetail!: Trainer;
  routerLink= "/trainers/{{trainer.id}}";
  constructor(
    private route: ActivatedRoute,
   private trainerService: TrainerService
  ) {}

  getTrainer(){
    this.trainerService.getTrainer(this.trainerId).subscribe((trainer) => {this.trainerDetail = trainer;});
  }

  ngOnInit() {

    if(this.trainerDetail === undefined){
      this.trainerId = parseInt(this.route.snapshot.paramMap.get('id')!)

      if (this.trainerId) {
        this.getTrainer();
      }
    }
    }
  }
 

