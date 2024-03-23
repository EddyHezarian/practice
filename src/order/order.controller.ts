import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateOrderDTO } from './dto/createorder.dto';
import { OrderService } from './order.service';
import { ChangeStatusDTO } from './dto/changestatus.dto';
import { EditOrderDTO } from './dto/editorder.dto';
import { get } from 'http';
import { query } from 'express';

@Controller('order')
export class OrderController {
    constructor(private service:OrderService){}
    @Post()
    @UsePipes(new ValidationPipe())
    createNewOrder(@Body() createOrderDTO:CreateOrderDTO){
        return this.service.createNewOrder(createOrderDTO);
    }

    @Patch('status/:id')
    @UsePipes(new ValidationPipe())
    changeStatus(@Param('id')id:string , @Body() changeStatusDTO:ChangeStatusDTO){
        return this.service.changeStatus(id,changeStatusDTO);
    }    
    @Delete(':id')
    deleteOrder(@Param('id')id:string){
        return this.service.deleteOrder(id);
    }    
    @Patch(':id')
    @UsePipes(new ValidationPipe())
    editeInfo(@Param('id')id:string,@Body() editeInfoDTO:EditOrderDTO){
        return this.service.editOrderInfo(id,editeInfoDTO);
    }
    @Get()
    getAllOrders(){
        return this.service.listAllOrders();
    }
    @Get('findByBrands')
    async getByBrand(@Query('brand_name') query:string ){
        return this.service.getOrdersByBrandName(query);
    }
    @Get('search')
    async searchOrderByName(@Query("name") name:string){
        return this.service.getOrdersByNameOfCustomer(name);
    }
    
    
}
