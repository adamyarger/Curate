class LinksController < ApplicationController

	before_action :authenticate_user!

	def index
		@links = Link.all
	end

	def new
		@link = Link.new
	end

	def show
		@link = Link.find(params[:id])
	end

	def create
		@link = current_user.links.build(link_params)

		if @link.save
			redirect_to links_path, :notice => "I like"
		else
			render :new
		end
	end

	private

	def link_params
		params.require(:link).permit(:content, :intro, :messenge, :page_tag, :title, :thumbnail_url, :description)
	end

end
