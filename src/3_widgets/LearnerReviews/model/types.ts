import { IReview } from "../../../5_entities/Review/model/types";

export interface ILearnerReviews {
    items: IReview[] | null;
    className?: string;
}