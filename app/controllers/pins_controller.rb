class PinsController < ApplicationController

  def index
    @pins = Pin.all
    respond_to do |format|
      format.json { render json: @pins}
    end
  end

# root
  def new
    @pin = Pin.new
  end

  def create
    @pin = Pin.new(pin_params)
    respond_to do |format|
      if @pin.save
        format.json { render json: @pin, status: :created}
      else
        format.json { render json: @pin.errors, status: :unprocessable_entity }
      end
    end

  end

  private
  def pin_params
    params.require(:pin).permit(:lat, :lng)
  end

end
