class State
  include Mongoid::Document
  field :abbreviation, type: String
  field :name, type: String
  field :r_candidate, type: Array
  field :d_candidate, type: Array
end
