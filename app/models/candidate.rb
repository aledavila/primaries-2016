module Candidate
include Pollster

  def self.gop_primary
    data = Chart.where(topic: "2016-president-gop-primary")
  end

  def self.dem_primary
    data = Chart.where(topic: "2016-president-dem-primary")
  end
end
