class Movie < ApplicationRecord
  has_attached_file :img
  validates_attachment_content_type :img, content_type: /\Aimage\/.*\z/

  def img_url
    img.url
  end 

end
