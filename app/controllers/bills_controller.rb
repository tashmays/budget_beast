class BillsController < ApplicationController
  def index
  	@bills = Bill.all
  end

  def create
  	@bill = Bill.create(bill_params)
  	render 'bill'
  end

  private
  	def bill_params
  		params.require(:bill).permit(:name, :amount, :categories, :due_date)
  	end

end
