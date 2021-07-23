const itActsAsFavoriteCafeModel = (favoriteCafe) => {
  it('should return the cafe that has been added', async () => {
    favoriteCafe.putCafe({ id: 1 });
    favoriteCafe.putCafe({ id: 2 });
 
    expect(await favoriteCafe.getCafe(1))
      .toEqual({ id: 1 });
    expect(await favoriteCafe.getCafe(2))
      .toEqual({ id: 2 });
    expect(await favoriteCafe.getCafe(3))
      .toEqual(undefined);
  });
 
  it('should refuse a cafe from being added if it does not have the correct property', async () => {
    favoriteCafe.putCafe({ aProperty: 'property' });
 
    expect(await favoriteCafe.getAllCafes())
      .toEqual([]);
  });
 
  it('can return all of the cafe that have been added', async () => {
    favoriteCafe.putCafe({ id: 1 });
    favoriteCafe.putCafe({ id: 2 });
 
    expect(await favoriteCafe.getAllCafes())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });
 
  it('should remove favorite cafe', async () => {
    favoriteCafe.putCafe({ id: 1 });
    favoriteCafe.putCafe({ id: 2 });
    favoriteCafe.putCafe({ id: 3 });
 
    await favoriteCafe.deleteCafe(1);
 
    expect(await favoriteCafe.getAllCafes())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });
 
  it('should handle request to remove a cafe even though the cafe has not been added', async () => {
    favoriteCafe.putCafe({ id: 1 });
    favoriteCafe.putCafe({ id: 2 });
    favoriteCafe.putCafe({ id: 3 });
 
    await favoriteCafe.deleteCafe(4);
 
    expect(await favoriteCafe.getAllCafes())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};
 
export { itActsAsFavoriteCafeModel };