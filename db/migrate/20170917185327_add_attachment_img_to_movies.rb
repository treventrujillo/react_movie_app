class AddAttachmentImgToMovies < ActiveRecord::Migration[5.1]
  def self.up
    change_table :movies do |t|
      t.attachment :img
    end
  end

  def self.down
    remove_attachment :movies, :img
  end
end
