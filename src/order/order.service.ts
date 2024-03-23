import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from 'src/schema/order.schema';
import { CreateOrderDTO } from './dto/createorder.dto';
import { ChangeStatusDTO } from './dto/changestatus.dto';
import { EditOrderDTO } from './dto/editorder.dto';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name)private OrderModel:Model<Order>){}
//!GET-----------------------------------
    listAllOrders(){
        return this.OrderModel.find();
    }

    getOrdersByBrandName(brandName:string){
        return this.OrderModel.find({brand_name:brandName}).exec();
    }

    getOrderByID(id:string){
        return this.OrderModel.findById(id);
    }

    //?search feature-----------------
    getOrdersByNameOfCustomer(name:string){
        const regexForsimilirNames = new RegExp(name,'i');
        return this.OrderModel.find({name:{$regex: regexForsimilirNames}}).exec();
    }
//!Post-----------------------------------
    createNewOrder(newOrderDTO:CreateOrderDTO){
        const newOrder= new this.OrderModel(newOrderDTO);
        return newOrder.save();
    }
//!UPDATE---------------------------------
    changeStatus( id:string,statusDTO:ChangeStatusDTO){
        return this.OrderModel.findByIdAndUpdate(id,statusDTO,{new:true});
    }
    editOrderInfo( id:string,editOrderDTO:EditOrderDTO){
        return this.OrderModel.findByIdAndUpdate(id,editOrderDTO,{new:true});
    }
//!DELETE---------------------------------
    deleteOrder(id:string){
        return this.OrderModel.findByIdAndDelete(id);
    }
    


}
